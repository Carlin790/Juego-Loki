# Sofi y Loki: ¡Vení, Loki!

Juego web infantil 2D, tierno y simple, pensado para una niña de 5 años.

## ¿De qué se trata?
Sofi pasea por el parque con su golden retriever Loki. A veces Loki se distrae y se va a jugar con otros perritos. Cuando eso pasa, aparece un botón gigante **“¡Loki!”** para llamarlo. Al tocarlo, Loki vuelve corriendo feliz con recompensas visuales (corazones, estrellas y huellitas).

## Tecnologías
- HTML
- CSS
- JavaScript (vanilla)

No usa backend ni base de datos.

## Cómo ejecutarlo localmente
Tenés dos opciones:

### Opción 1 (recomendada): servidor local
Desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

Abrí en tu navegador:

```text
http://localhost:8000
```

### Opción 2: abrir el archivo directamente
También podés hacer doble clic en `index.html`.

## Flujo del juego
1. Pantalla de inicio con botón **Jugar**.
2. Parque principal con Sofi y Loki.
3. Loki se aleja para jugar con otros perros.
4. Aparece botón grande **“¡Loki!”**.
5. Loki vuelve corriendo cuando lo llamás.
6. Se muestran recompensas visuales y mensaje positivo.
7. El ciclo se repite y también podés usar **Volver a jugar**.

## Controles
- **Jugar**: inicia el juego.
- **¡Loki!**: llama a Loki cuando se aleja.
- **Volver a jugar**: reinicia el ciclo.
