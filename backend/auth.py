from django.contrib.auth.backends import ModelBackend
from models import Teacher, Student

class UserTypeBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            teacher = Teacher.objects.get(username=username)
            if teacher.check_password(password):
                return teacher
        except Teacher.DoesNotExist:
            pass

        try:
            student = Student.objects.get(username=username)
            if student.check_password(password):
                return student
        except Student.DoesNotExist:
            pass

        return None