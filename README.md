# Primer día con Git/Githud

Lista de comando de git

* Para poder ver la versión de Git

```bash
git --version
```

* Para configurar el correo

```bash
git config --global user.email "email"
```

* Para poder configurar el username

```bash
git config --global user.name "username"
```

* Sirve para poder empezas a usar el control de versión (git) en nuestra carpeta

* OJO: Esto solo se realiza una vez por carpeta

```bash
git init
```

* Para ver el estado de nuestros cambios

```bash
git status
```

* Agrega los archivos a la memoria de la PC

```bash
git add.
```

* Crea el registro de los cambios realizados

```bash
git commit -m "comentario"
```

* Poder ver historial de commits

[ ] Git log retorna un `id` con este id vamos a poder ver el detalle de los cambios que se hicieron en ese commit

```bash
git log
```

*Para poder ver el detalle (contenido) del commit usamos 

```bash
git show id-del commit
```

* Para poder subir los codigos locales a la remoto (web) se utiliza

```bash
git push origin main
```