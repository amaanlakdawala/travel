from django.urls import path
from . import views 
urlpatterns=[
   path('hotels/',views.getHotels,name="get_hotels"),

   path('hotels/<int:pk>/',views.getHotel,name="get_hotel"),

]