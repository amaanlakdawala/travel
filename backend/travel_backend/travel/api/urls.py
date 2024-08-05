from django.urls import path
from . import views 
urlpatterns=[
   path('hotels/',views.getHotels,name="get_hotels"),
<<<<<<< HEAD
   path('hotels/<int:pk>/',views.getHotel,name="get_hotel"),
   path('bookings/', views.book, name='create_booking'),
   path('search/', views.filterhotel, name='filterhotel'),
   path('register/',views.register,name='register'),
   path('getUsers/',views.getUsers,name='getUsers'),
   # path('updateprofile/',views.updateprofile,name="updateprofile"),
   path('login/',views.login,name="login"),
   path('user/',views.user,name="user"),
   path('logout/',views.logout,name="logout")

=======

   path('hotels/<int:pk>/',views.getHotel,name="get_hotel"),
>>>>>>> 7602c1bb50205c373a7a781dfab5e51fd9bbca3e

]