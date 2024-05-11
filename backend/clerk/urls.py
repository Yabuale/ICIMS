from django.urls import path
from .views import Reqview,ReqDetail
from . import views

urlpatterns = [
    path('requests/',Reqview.as_view()),
    path('reqdetail/<int:pk>/', ReqDetail.as_view()),
    path('searchimg', views.searchimg),
    path('searchname', views.searchname),
    path('searchssn', views.searchssn),
]