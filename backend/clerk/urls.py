from django.urls import path
from .views import Reqview,ReqDetail
from . import views

urlpatterns = [
    path('requests/',views.Reqview),
    path('reqdetail/<int:pk>/', views.ReqDetail),
    path('searchimg', views.searchimg),
    path('searchdimg', views.searchdimg),
    path('searchname', views.searchname),
    path('searchssn', views.searchssn),
    path('found', views.foundresp),
    path('notfound', views.notfoundresp),
]