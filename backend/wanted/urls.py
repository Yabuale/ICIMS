from django.urls import path
from .views import WantedCriminalView,WantedDetail
from . import views

urlpatterns = [
    path('', WantedCriminalView.as_view()),
    path('detail/<int:pk>/', WantedDetail.as_view()),
    path('addWanted', views.addWanted),

]