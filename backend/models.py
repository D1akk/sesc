from django.db import models
from django.db.models.signals import post_save
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from django.dispatch import receiver
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.base_user import BaseUserManager
from rest_framework.authtoken.models import Token


class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        user = self.create_user(email, password)
        user.is_superuser = True
        user.save()
        return user


class User(AbstractBaseUser):
    email = models.EmailField(
        _('Электронная почта'), max_length=40, unique=True)
    name = models.CharField(max_length=40)
    patronimyc = models.CharField(max_length=40, blank=True)
    surname = models.CharField(max_length=40)
    is_teacher = models.BooleanField(default=False)
    is_student = models.BooleanField(default=False)
    is_clerk = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Clerk(models.Model):
    user = models.OneToOneField(User, related_name='clerk', on_delete=models.CASCADE)
    phone = models.CharField(max_length=30, null = True)
    position = models.CharField(max_length=40, null = True)


class Teacher(models.Model):
    user = models.OneToOneField(
        User, related_name="teacher", on_delete=models.CASCADE)
    position = models.CharField(max_length=40, null = True)
    phone = models.CharField(max_length=30, null = True)

    def __str__(self):
        return self.user.surname + ' ' +self.user.name+' '+self.user.patronimyc

    class Meta:
        verbose_name = 'Учитель'
        verbose_name_plural = 'Учителя'


class Research(models.Model):
    class ResearchArea(models.TextChoices):
        physics = 'physics', _('Физико-технический')
        math = 'math', _('Математика и ИТ')
        bio = 'bio', _('Биолого-экологический')
        chemistry = 'chemistry', _('Химико-технический')
        language = 'language', _('Лингвистический')
    title = models.CharField(max_length=300)
    research_area = models.CharField(max_length=50,
                                     choices=ResearchArea.choices)
    
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Научная работа'
        verbose_name_plural = 'Научные работы'


class Conference(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    city = models.CharField(max_length=100)
    
    class ConferenceRange(models.TextChoices):
        high = 'high', _('Международный уровень')
        middle = 'middle', _('Всероссийский уровень')
        low = 'low', _('Региональный уровень')
    conference_range = models.CharField(max_length=50, choices=ConferenceRange.choices)


class Student(models.Model):
    user = models.OneToOneField(
        User, related_name="student", on_delete=models.CASCADE)
    grade = models.PositiveSmallIntegerField(null=True)
    researches = models.ManyToManyField(
        Research, blank=True, verbose_name='научные работы', related_name='student_researches')

    conferences = models.ManyToManyField(Conference, blank=True, verbose_name='конференции', related_name='student_conferences')

    def __str__(self):
        return self.user.surname + ' ' +self.user.name+' '+self.user.patronimyc
    
    class Meta:
        verbose_name = 'Учащийся'
        verbose_name_plural = 'Учащиеся'


class Report(models.Model):
    #  student = models.ForeignKey(Student,on_delete=models.CASCADE, max_length=200)
    #  teacher = models.ForeignKey(Teacher,on_delete=models.CASCADE, max_length=200)
     student = models.CharField(max_length=200, null=True)
     teacher = models.CharField(max_length=200, null=True)
     research_title = models.CharField(max_length=400, null=True)
     points1 = models.FloatField()
     points2 = models.FloatField()
     score = models.PositiveIntegerField()
     mark = models.CharField(max_length=100, null=True)