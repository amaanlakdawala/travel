from django.db import models
from django.contrib.auth.models import User,AbstractUser

# Create your models here.
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class User(AbstractUser):
    name = models.CharField(max_length=255, null=True, blank=True)
    bio = models.TextField(blank=True)
    birth_date = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=100, blank=True)
    cover_image = models.ImageField(null=True, blank=True)
    profile_image = models.ImageField(null=True, blank=True)
    email = models.EmailField(unique=True, null=True, blank=True)
    username = models.CharField(max_length=100, unique=True, null=False, blank=True)
   
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    


class Hotel(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    description = models.TextField()
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='hotel_images/')

    def __str__(self):
        return self.name
    
class Book(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    guest_name = models.CharField(max_length=100)
    guest_email = models.EmailField(max_length=100)
    guest_phone = models.CharField(max_length=20)

    def __str__(self):
        return self.guest_name
