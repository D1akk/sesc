from django.shortcuts import render
from rest_framework import generics,mixins, viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Student, Teacher, Research
from .serializers import StudentSerializer, ResearchSerializer, TeacherSerializer
from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy
from django.contrib.auth import authenticate, login


class StudentList(mixins.ListModelMixin,viewsets.GenericViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class TeacherList(mixins.ListModelMixin,viewsets.GenericViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class ResearchList(mixins.ListModelMixin,viewsets.GenericViewSet):
    queryset = Research.objects.all()
    serializer_class = ResearchSerializer

class ResearchDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Research.objects.all()
    serializer_class = ResearchSerializer

class TeacherLoginView(LoginView):
    template_name = 'teacher_login.html'
    success_url = reverse_lazy('teacher_dashboard')

class StudentLoginView(LoginView):
    template_name = 'student_login.html'
    success_url = reverse_lazy('student_dashboard')


class TeacherAuthView(APIView):
    def post(self, request, format=None):
        serializer = TeacherSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(username=serializer.validated_data['username'], password=serializer.validated_data['password'])
            if user is not None and user.is_active:
                login(request, user)
                return Response({'message': 'Logged in successfully'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StudentAuthView(APIView):
    def post(self, request, format=None):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(username=serializer.validated_data['username'], password=serializer.validated_data['password'])
            if user is not None and user.is_active:
                login(request, user)
                return Response({'message': 'Logged in successfully'})
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



def home(request):
    teachers = Teacher.objects.all()
    researches = Research.objects.all()
	#Event.objects.filter(category__in=Athlete.objects.get(id).get_descendants(include_self=True))
    researches_titles = [0] * len(researches)
    k = 0
    for post in researches:
        researches_titles[k] = f'{post.title}'
        k = k + 1
    if request.method == 'POST':
        id_researches = request.POST.get('select2multi')
        print(id_researches)
        data = {
         "teachers": teachers,
         "nirs": researches,
         "researches_titles": researches_titles,
         "counter": k,
         "id_researches": id_researches}
        return render(request, "index.html", context=data)
    data = {
         "teachers": teachers,
         "nirs": researches,
         "researches_titles": researches_titles,
         "counter": k}
    return render(request, "index.html", context=data)

def test(request):
	pass