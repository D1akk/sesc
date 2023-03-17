from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

# teachers_group = Group(name = 'teachers')
# teachers_group.save()
# teachers_permission = Permission.objects.get(codename = 'add_assigment')

# students_group = Group(name = 'students')
# students_group.save()

class Student(AbstractUser):
    name = models.CharField(max_length=100)
    email = models.EmailField()

    groups = models.ManyToManyField(
        Group,
        related_name='student_groups',
        blank=True,
        verbose_name=('student_groups'),
        help_text=('The groups this user belongs to. A user will '
                    'get all permissions granted to each of their '
                    'groups.'),
    )

    user_permissions = models.ManyToManyField(
        Permission,
        blank=True,
        related_name='student_user_permissions',
        verbose_name=('user permissions'),
        help_text=('Specific permissions for this user'),
    )

    def str(self):
        return self.name
    

class Research(models.Model):
    title = models.CharField(max_length=200)
    complication = models.CharField(max_length=30, default='')
    
    class Meta:
        ordering = ['title']
        ordering = ['complication']
        
    def __str__(self):
        return self.title
    

class Teacher(AbstractUser):
    name = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    researches = models.ManyToManyField(Research)
    
    class Meta:
        ordering = ['name']
        ordering = ['subject']

    groups = models.ManyToManyField(
        Group,
        related_name='teacher_groups',
        blank=True,
        verbose_name=('groups'),
        help_text=('The groups this user belongs to. A user will '
                    'get all permissions granted to each of their '
                    'groups.'),
    )

    user_permissions = models.ManyToManyField(
        Permission,
        blank=True,
        related_name='teacher_user_permissions',
        verbose_name=('user permissions'),
        help_text=('Specific permissions for this user'),
    )

    

    def researches_titles(self):
        return " %s" % (", ".join([research.title for research in self.researches.all()]))   
     
    def __str__(self):
        return self.name+" "+" %s" % (", ".join([research.title for research in self.researches.all()]))

    #researches_titles.short_description = 'Nirs'

