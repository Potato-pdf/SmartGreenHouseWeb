from django.urls import path, include
from . import views
from rest_framework.documentation import include_docs_urls
from rest_framework import routers

router = routers.DefaultRouter ()
router.register(r'SmartGreenHouse', views.SmartGreenHouse_views, 'SmartGreenHouse')
urlpatterns = [
    path("api/", include(router.urls)),
    path('docs/', include_docs_urls(title='SmartGreenHouse API', public=True))
]
