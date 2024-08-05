<<<<<<< HEAD
# from rest_framework.serializers import ModelSerializer
# from travel.models import Hotel
=======
<<<<<<< HEAD
from rest_framework import serializers
from travel.models import Hotel

# class HotelSerializer(ModelSerializer):
#     class Meta:
#         model=Hotel
#         fields='__all__'

class HotelSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Hotel
        fields = '__all__'

    def get_image(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.image.url)
        return obj.image.url
=======
from rest_framework.serializers import ModelSerializer
from travel.models import Hotel
>>>>>>> 7602c1bb50205c373a7a781dfab5e51fd9bbca3e

# class HotelSerializer(ModelSerializer):
#     class Meta:
#         model=Hotel
#         fields='__all__'


from rest_framework import serializers
from travel.models import Hotel,Book
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
<<<<<<< HEAD
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}  # Ensure password is write-only

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])  # Hash the password
        user.save()  # Save the user instance to the database
        return user
  

  
    
    
        

    

class HotelSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Hotel
        fields = '__all__'

    def get_image(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.image.url)
        return obj.image.url
    

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

# class ProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Profile
#         fields = '__all__'
=======
        model=Hotel
        fields='__all__'
>>>>>>> c21df584fd3dd39e80bd6d85b239c894d6a23be5
>>>>>>> 7602c1bb50205c373a7a781dfab5e51fd9bbca3e
