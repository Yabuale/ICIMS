from django.urls import path
from .views import CriminalView,Criminal_detail
from . import views

urlpatterns = [
    path('', views.CriminalView),
    path('addcriminal', views.addCriminal),
    path('criminaldetail/<int:pk>/',Criminal_detail.as_view())
]