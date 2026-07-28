from django.contrib import admin
from web.models.user import UserProfile

# Register your models here.

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    raw_id_fields = ('user',)  #逗号千万不要删！！！！
