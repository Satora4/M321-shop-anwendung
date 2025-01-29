FROM postgres:15

ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=1234
ENV POSTGRES_DB=shop_anwendung

# Optional: Kopieren von SQL-Dateien oder Seed-Daten
COPY ./sql/init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
