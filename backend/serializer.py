from rest_framework import serializers
from .models import *
from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'is_student', 'is_teacher', 'is_clerk']


class ClerkSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={"input_type": "password"}, write_only=True)

    class Meta:
        model = User
        fields = ['name', 'surname', 'patronimyc',
                  'email', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self, **kwargs):
        user = User(
            email=self.validated_data['email'],
            name=self.validated_data['name'],
            surname=self.validated_data['surname'],
            patronimyc=self.validated_data['patronimyc']
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError(
                {"error": "Неверный пароль."})
        user.set_password(password)
        user.is_clerk = True
        user.save()
        Clerk.objects.create(user=user)
        return user


class TeacherSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={"input_type": "password"}, write_only=True)

    class Meta:
        model = User
        fields = ['name', 'surname', 'patronimyc',
                  'email', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self, **kwargs):
        user = User(
            email=self.validated_data['email'],
            name=self.validated_data['name'],
            surname=self.validated_data['surname'],
            patronimyc=self.validated_data['patronimyc']
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError(
                {"error": "Неверный пароль."})
        user.set_password(password)
        user.is_teacher = True
        user.save()
        Teacher.objects.create(user=user)
        return user


class StudentSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={"input_type": "password"}, write_only=True)

    class Meta:
        model = User
        fields = ['name', 'surname', 'patronimyc',
                  'email', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self, **kwargs):
        user = User(
            email=self.validated_data['email'],
            name=self.validated_data['name'],
            surname=self.validated_data['surname'],
            patronimyc=self.validated_data['patronimyc']
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError(
                {"error": "Неверный пароль."})
        user.set_password(password)
        user.is_student = True
        user.save()
        Student.objects.create(user=user)
        return user


# кастомизация obtainauthtoken
class AuthTokenSerializer(serializers.Serializer):
    """Serializer for the user authentication object"""
    email = serializers.CharField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False
    )

    def validate(self, attrs):
        """Overwriting the validate() fn"""
        email = attrs.get('email')
        password = attrs.get('password')
        user = authenticate(
            request=self.context.get('request'),
            username=email,
            password=password
        )
        if not user:
            msg = _('Unable to authenticate with provided credentials')
            raise serializers.ValidationError(msg, code='authentication')

        attrs['user'] = user
        return attrs


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'


class ConferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conference
        fields = '__all__'


class ResearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Research
        fields = '__all__'


class StudentSerializer(serializers.ModelSerializer):
    name = serializers.ReadOnlyField(source='user.name')
    surname = serializers.ReadOnlyField(source='user.surname')
    patronimyc = serializers.ReadOnlyField(source='user.patronimyc')
    researches = ResearchSerializer(many=True)
    conferences = ConferenceSerializer(many=True)

    class Meta:
        model = Student
        # fields = ['id', 'user_id', 'name', 'patronimyc', 'surname', 'grade',
        #           'researches', 'points1', 'points2', 'score', 'conferences']
        fields = ['id', 'user_id', 'name', 'patronimyc',
                  'surname', 'grade', 'researches', 'conferences']


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'
