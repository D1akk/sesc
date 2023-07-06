
from rest_framework import generics, permissions, status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken


from rest_framework.views import APIView
from .permissions import IsStudentUser, IsTeacherUser
from .models import *
from .serializer import *
from rest_framework.response import Response


class ResearchListView(APIView):
    def get(self, request):
        # output = [
        #     {
        #         "id":output.id,
        #         "title": output.title,
        #         "research_area": output.research_area,
        #         "teacher_id": output.teacher_id,
        #         "teacher": output.teacher.user.surname+" "+output.teacher.user.name+" "+output.teacher.user.patronimyc
        #     } for output in Research.objects.all()
        # ]
        # return Response(output)
        researches = Research.objects.all()
        serializer = ResearchSerializer(researches, many=True)
        return Response(serializer.data)


class ResearchAddView(APIView):
    def post(self, request):
        serializer = ResearchSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class ResearchSelectView(APIView):
    def post(self, request):
        student_id = request.data.get('student_id')
        research_id = request.data.get('research_id')
        student = Student.objects.get(id=student_id)
        print(research_id)
        student.researches.add(*research_id)
        student.save()
        return Response({"massage":"НИР успешно выбран"})


class ConferenceAddView(APIView):
    def post(self, request):
        serializer = ConferenceSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class ConferenceListView(APIView):
    def get(self, request):
        conferences = Conference.objects.all()
        serializer = ConferenceSerializer(conferences, many=True)
        return Response(serializer.data)


class TeacherListView(APIView):
    def get(self, request):
        output = [
            {
                "user_id": output.user.id,
                "teacher_id": output.id,
                "name": output.user.name,
                "patronymic": output.user.patronimyc,
                "surname": output.user.surname,
                "user_id":output.user.id,
            } for output in Teacher.objects.all()
        ]
        return Response(output)
        # teachers = Teacher.objects.all()
        # serializer = TeacherSerializer(teachers, many=True)
        # return Response(serializer.data)


class StudentListView(APIView):
    def get(self, request):
        # student = [
        #      {
        #          "user_id": student.user.id,
        #         "student_id": student.id,
        #         "name": student.user.name,
        #          "patronymic": student.user.patronimyc,
        #          "surname": student.user.surname,
        #          "grade": student.grade,
        #          'researches': student.researches.title
        #      } for student in Student.objects.all()
        # ]
        # return Response(student)
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

class TeacherSignupView(generics.GenericAPIView):
    serializer_class = TeacherSignupSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.get(user=user).key,
            "message": "account created successfully"
        })


class StudentSignupView(generics.GenericAPIView):
    serializer_class = StudentSignupSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.get(user=user).key,
            "message": "account created successfully"
        })


class ClerkSignupView(generics.GenericAPIView):
    serializer_class = ClerkSignupSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.get(user=user).key,
            "message": "account created successfully"
        })


class CreateTokenView(ObtainAuthToken):
    """Create a new auth token for user"""
    serializer_class = AuthTokenSerializer
    # renderer_classes = backend_api.DEFAULT_RENDERER_CLASSES

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        print(user.is_student)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'is_student': user.is_student,
            'is_teacher': user.is_teacher,
        })


class LogoutView(APIView):
    def post(self, request, format=None):
        print(request.auth)
        request.auth.delete()
        return Response(status=status.HTTP_200_OK)


class StudentOnlyView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated & IsStudentUser]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class TeacherOnlyView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated & IsTeacherUser]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
    

class ReportAddView(APIView):
    def post(self, request):
        serializer = ReportSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class ReportListView(APIView):
    def get(self, request):
        reports = Report.objects.all()
        serializer = ReportSerializer(reports, many=True)
        return Response(serializer.data)
