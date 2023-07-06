from django.urls import path
from backend.views import *

urlpatterns = [
    path('signup/teacher/', TeacherSignupView.as_view()),
    path('signup/student/', StudentSignupView.as_view()),
    path('signup/clerk/', ClerkSignupView.as_view()),
    path('login/', CreateTokenView.as_view(), name='auth-token'),
    path('logout/', LogoutView.as_view(), name='logout-view'),

    path('teacher/dashboard/', TeacherOnlyView.as_view(),
         name='freelance-dashboard'),
    path('student/dashboard/', StudentOnlyView.as_view(), name='client-dashboard'),
    path('student-list/', StudentListView.as_view(), name='student-list'),
    path('teacher-list/', TeacherListView.as_view(), name='teacher-list'),

    path('research-list/', ResearchListView.as_view(), name='research-list'),
    path('research-add/', ResearchAddView.as_view(), name='research-add'),
    path('research-select/', ResearchSelectView.as_view(), name='research-select'),

    path('conference-add/', ConferenceAddView.as_view(), name='conference-add'),
    path('conference-list/', ConferenceListView.as_view(), name='conference-list'),

    path('report-add/', ReportAddView.as_view(), name='report-add'),
    path('report-list/', ReportListView.as_view(), name='report-list')
]
