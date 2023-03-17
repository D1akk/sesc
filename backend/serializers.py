from rest_framework import serializers
from .models import Student, Research, Teacher

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = 'all' 

class ResearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Research
        fields = 'all' 

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = 'all' 