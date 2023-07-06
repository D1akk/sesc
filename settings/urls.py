from django.contrib import admin
from django.urls import path, include
from django.urls import re_path as url
from backend.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('sesc/', include('backend.urls')),
    # path('view/researches/', ResearchView.as_view(), name='view_researches'),
    # path('view/teachers/', TeacherView.as_view(), name= 'view_teachers'),
    # path('view/students/', StudentView.as_view(), name='view_students'),
    #path('login/',CustomAuthToken.as_view(), name='auth-token'),
    # path('login/', CreateTokenView.as_view(), name = 'auth-token'),
    # path('logout/', LogoutView.as_view(), name='logout-view'),
    # path('teacher/dashboard/', TeacherOnlyView.as_view(), name='freelance-dashboard'),
    # path('student/dashboard/', StudentOnlyView.as_view(), name='client-dashboard'),
    # path('signup/teacher/', TeacherSignupView.as_view()),
    # path('signup/student/', StudentSignupView.as_view()),
    
]
