from django.urls import path
from .views import WantedCriminalView,WantedDetail,Requests,Respview
from . import views

urlpatterns = [
    path('wanted/', WantedCriminalView.as_view()),
    path('wanteddetail/<int:pk>/', WantedDetail.as_view()),
    path('addwanted', views.addWanted),
    path('sendrequest',Requests.as_view()),
    path('responces/<int:pk>/',Respview.as_view()),
]