from django.apps import AppConfig


class SystemAdminConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'system_admin'
    def ready(self):
        from.scheduler import scheduler
        scheduler.start()
