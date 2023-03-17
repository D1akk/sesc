from django.contrib import admin
from django.contrib.auth import views as auth_views

from django.urls import path, include
from rest_framework import routers

#from users import views as user_views
from backend.views import home
from backend.views import StudentList, StudentDetail, ResearchDetail, ResearchList, TeacherList,TeacherDetail, TeacherLoginView, TeacherAuthView,StudentAuthView, StudentLoginView

router = routers.DefaultRouter()
router.register(r'students', StudentList)

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('register/', user_views.register, name='register'),
    # path('profile/', user_views.profile, name='profile'),
    # path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
    # path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),
    # path('', include('sesc.urls')),
    path('api/', include(router.urls)),
    path('api/students/<int:pk>/', StudentDetail.as_view()),
    path('teacher/login/', TeacherLoginView.as_view(), name='teacher_login'),
    path('student/login/', StudentLoginView.as_view(), name='student_login'),
    path('teacher/authenticate/', TeacherAuthView.as_view(), name='teacher_authenticate'),
    path('student/authenticate/', StudentAuthView.as_view(), name='student_authenticate'),
]