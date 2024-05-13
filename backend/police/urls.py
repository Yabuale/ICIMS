from django.urls import path
from .views import WantedCriminalView,WantedDetail,Requests,Respview
from . import views

urlpatterns = [
    path('wanted/', WantedCriminalView.as_view()),
    path('wanteddetail/<int:pk>/', WantedDetail.as_view()),
    path('addwanted', views.addWanted),
    path('sendrequest',views.Requestss),
    path('responces/<int:pk>/',views.Respview),
    path('dresponces/<int:pk>/',views.rsdelete),
]