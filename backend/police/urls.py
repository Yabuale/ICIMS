from django.urls import path
from .views import WantedCriminalView,WantedDetail
from . import views

urlpatterns = [
    path('wanted/', WantedCriminalView.as_view()),
    path('wanteddetail/<int:pk>/', WantedDetail.as_view()),
    path('addwanted', views.addWanted),

]