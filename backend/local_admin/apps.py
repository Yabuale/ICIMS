from django.apps import AppConfig


class LocalAdminConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'local_admin'
    def ready(self):
        from.scheduler import scheduler
        scheduler.start()
