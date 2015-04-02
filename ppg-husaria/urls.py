from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

import site.views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'gettingstarted.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', site.views.index, name='index'),
    url(r'^db', site.views.db, name='db'),
    url(r'^admin/', include(admin.site.urls)),

)