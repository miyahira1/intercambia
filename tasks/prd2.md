# PRD: Entrenador de Vocabulario/Gramática por Selección (SRS)

## 1. Introducción / Overview

Aplicación web para aprender **vocabulario y gramática** respondiendo preguntas de **opción múltiple** (el usuario solo selecciona la respuesta correcta). El sistema rastrea qué se domina y qué no, y muestra con más frecuencia lo que falla, usando metodologías de aprendizaje probadas: **repetición espaciada (sistema Leitner)**, **práctica de recuperación (testing effect)** e **intercalado de temas (interleaving)**.

La interfaz está en **español**. El usuario aprende **inglés** y **japonés** desde el español. El producto es **web y responsive** (sirve también en el celular), y está optimizado para responder rapidísimo con el teclado y avanzar al siguiente ítem con cero fricción, con una capa de juego (rachas, XP, niveles que desbloquean temas).

Decisión de diseño central acordada: **la velocidad es de interfaz, no cognitiva.** La UI no tiene fricción, pero el esfuerzo mental se mantiene alto (distractores difíciles, espaciado, producción ocasional).

## 2. Goals

- Permitir aprender por **selección de opciones** con feedback inmediato y auto-avance.
- Rastrear el estado de memoria de cada ítem y **mostrar más seguido lo que se falla**.
- Implementar **repetición espaciada (Leitner, cajas 1–5)** como motor único de programación.
- **Intercalar** ítems de todos los temas desbloqueados, en vez de drillear un tema aislado.
- Generar **distractores competitivos** (errores plausibles), no relleno obvio.
- Mostrar **dominio** por tema como métrica principal (ej. "18/40 dominados"), con el % de aciertos como dato secundario.
- **Desbloquear temas por nivel**, donde el nivel se gana por ítems dominados (no por tiempo ni por % crudo).
- Soportar **japonés por capas**: significado, lectura y escritura como tipos de ítem distintos; sistemas de escritura (kana, kanji) como temas desbloqueables.
- Gamificar con **racha diaria, XP y meta diaria**.
- Tiempo de respuesta de UI imperceptible: responder con teclas, auto-avance, sin mouse obligatorio.

## 3. User Stories

### US-001: Modelo de datos de ítems y temas
**Description:** Como desarrollador, necesito un esquema que represente idiomas, temas, ítems y tipos de ítem para poder almacenar y consultar todo el contenido.

**Acceptance Criteria:**
- [ ] Tabla `languages` (ej. `es`→`en`, `es`→`ja`).
- [ ] Tabla `topics` con: idioma, nombre, nivel requerido para desbloquear, orden.
- [ ] Tabla `items` con: tema, tipo de ítem, prompt, respuesta correcta, lista de distractores.
- [ ] Campo `item_type` enumerado: `vocab_meaning`, `vocab_reading`, `grammar`, `production` (extensible).
- [ ] Cada ítem japonés de vocabulario puede existir en varias capas (significado / lectura) como ítems separados vinculados a una misma palabra base (`base_word_id`).
- [ ] Typecheck/lint pasa.

### US-002: Estado de aprendizaje por ítem (Leitner)
**Description:** Como desarrollador, necesito guardar el progreso de cada ítem por usuario para programar repasos.

**Acceptance Criteria:**
- [ ] Tabla `user_item_state` con: usuario, ítem, `box` (1–5), `due_at`, `last_seen_at`, contadores de aciertos/fallos.
- [ ] Acertar sube el ítem una caja (intervalo más largo) hasta máx. 5.
- [ ] Fallar devuelve el ítem a caja 1.
- [ ] Cada caja define un intervalo (ej. 1: inmediato; 2: ~1 día; 3: ~3 días; 4: ~7 días; 5: ~16 días), configurable.
- [ ] Un ítem en caja 4–5 cuenta como "dominado".
- [ ] Typecheck pasa.

### US-003: Selector de sesión intercalada
**Description:** Como usuario, quiero que cada sesión mezcle ítems de todos los temas que ya desbloqueé, priorizando lo vencido y lo de caja baja.

**Acceptance Criteria:**
- [ ] La cola extrae ítems de **todos** los temas desbloqueados del idioma activo (interleaving), no de uno solo.
- [ ] Prioriza ítems con `due_at` vencido y de cajas bajas.
- [ ] Evita repetir el mismo ítem dos veces seguidas dentro de la sesión.
- [ ] Si no hay vencidos, completa con ítems nuevos del tema desbloqueado más reciente.
- [ ] Typecheck pasa.

### US-004: Generación de pregunta con distractores duros
**Description:** Como usuario, quiero que las 3 opciones incorrectas sean errores plausibles para que tenga que discriminar de verdad.

**Acceptance Criteria:**
- [ ] Cada pregunta muestra 1 correcta + 3 distractores tomados de la lista curada del ítem (no aleatorios de todo el banco).
- [ ] El orden de las opciones se baraja en cada aparición.
- [ ] Para gramática, los distractores son confusiones típicas (ej. en inglés in/on/at; en japonés は/が).
- [ ] Typecheck pasa.

### US-005: Pantalla de pregunta con respuesta por teclado y auto-avance
**Description:** Como usuario, quiero responder con las teclas 1–4 y pasar a la siguiente automáticamente para ir lo más rápido posible.

**Acceptance Criteria:**
- [ ] Teclas `1`–`4` (y `A`–`D`) seleccionan la opción correspondiente.
- [ ] Al responder, la opción se marca **verde** si es correcta o **roja** si no, y se resalta la correcta.
- [ ] Auto-avance al siguiente ítem tras un retardo corto configurable (~600 ms); `Enter`/`Espacio` adelanta de inmediato.
- [ ] Funciona sin usar el mouse y es usable por toque en celular.
- [ ] Verify in browser using dev-browser skill.

### US-006: Selección de idioma activo
**Description:** Como usuario, quiero elegir entre inglés y japonés y que la sesión use solo ese idioma.

**Acceptance Criteria:**
- [ ] Selector inglés / japonés visible.
- [ ] La cola de práctica y el dashboard reflejan el idioma activo.
- [ ] El progreso de cada idioma se guarda por separado.
- [ ] Verify in browser using dev-browser skill.

### US-007: Capas del japonés (significado / lectura / escritura)
**Description:** Como usuario, quiero que cada palabra japonesa se evalúe por separado en significado y lectura para aprender bien cada capa.

**Acceptance Criteria:**
- [ ] Ítem de tipo `vocab_meaning`: prompt en japonés (en el sistema de escritura desbloqueado), opciones de significado en español.
- [ ] Ítem de tipo `vocab_reading`: prompt con la palabra, opciones de lectura (kana/rōmaji según desbloqueo).
- [ ] Rōmaji se muestra como apoyo mientras kana no esté desbloqueado; al desbloquear kana, el apoyo se reduce.
- [ ] Cada capa tiene su propio estado Leitner (se dominan por separado).
- [ ] Verify in browser using dev-browser skill.

### US-008: Niveles que desbloquean temas
**Description:** Como usuario, quiero subir de nivel al dominar ítems y que eso desbloquee temas nuevos, para sentir progreso de juego.

**Acceptance Criteria:**
- [ ] El nivel sube al alcanzar un umbral de **ítems dominados** (caja 4–5), no por % crudo ni por tiempo.
- [ ] Cada tema tiene un nivel requerido; al alcanzarlo, se desbloquea y entra a la mezcla de práctica.
- [ ] Para japonés, kana y kanji son temas desbloqueables (kana antes, kanji después).
- [ ] El usuario ve qué le falta para el próximo desbloqueo.
- [ ] Verify in browser using dev-browser skill.

### US-009: Dashboard de dominio por tema
**Description:** Como usuario, quiero ver mi dominio por tema (no solo % de aciertos) para saber qué me falta.

**Acceptance Criteria:**
- [ ] Por cada tema desbloqueado: ítems dominados / total (ej. "18/40"), como número grande.
- [ ] % de aciertos visible como **dato secundario**, no como métrica principal.
- [ ] Indicador visual de distribución por cajas (cuántos ítems en cada caja).
- [ ] Verify in browser using dev-browser skill.

### US-010: Modo "repaso de errores recientes"
**Description:** Como usuario, quiero un modo para repasar lo que fallé últimamente, usando el mismo motor de espaciado.

**Acceptance Criteria:**
- [ ] El modo arma una sesión filtrando ítems en caja 1–2 vistos recientemente.
- [ ] Usa el **mismo** scheduler Leitner (no una lógica paralela).
- [ ] Es un modo opcional, no obligatorio para avanzar.
- [ ] Verify in browser using dev-browser skill.

### US-011: Producción ocasional para ítems dominados
**Description:** Como usuario, quiero que de vez en cuando un ítem ya dominado me pida producirlo (no solo reconocerlo) para verificar conocimiento real.

**Acceptance Criteria:**
- [ ] Para ítems en caja 4–5, ocasionalmente aparece un challenge de producción de baja fricción (ej. ordenar la frase tocando fragmentos, o elegir letra por letra).
- [ ] Configurable / desactivable desde ajustes.
- [ ] Acertar/fallar afecta el estado Leitner igual que un ítem normal.
- [ ] Verify in browser using dev-browser skill.

### US-012: Gamificación (racha, XP, meta diaria)
**Description:** Como usuario, quiero racha diaria, XP y una meta diaria para mantenerme enganchado.

**Acceptance Criteria:**
- [ ] Cada respuesta otorga XP; la sesión muestra XP ganado.
- [ ] La racha aumenta al cumplir la meta diaria de ítems y se reinicia si se salta un día.
- [ ] Meta diaria configurable (ej. 20 ítems).
- [ ] Indicadores de racha y meta visibles en la pantalla principal.
- [ ] Verify in browser using dev-browser skill.

### US-013: Contenido seed curado (inglés y japonés)
**Description:** Como usuario, quiero contenido real de arranque en ambos idiomas para poder jugar desde el día uno.

**Acceptance Criteria:**
- [ ] Set seed para inglés: pocos temas (ej. vocabulario básico + 1–2 puntos de gramática) con distractores curados.
- [ ] Set seed para japonés: pocos temas, con capas significado/lectura y kana como tema temprano.
- [ ] Los datos seed son editables/ampliables sin tocar el código de la app.
- [ ] Typecheck pasa.

## 4. Functional Requirements

- FR-1: El sistema debe presentar preguntas de opción múltiple con 1 respuesta correcta y 3 distractores curados.
- FR-2: El sistema debe registrar cada respuesta y actualizar el estado Leitner del ítem (acierto sube de caja, fallo vuelve a caja 1).
- FR-3: El sistema debe programar repasos según la caja del ítem y mostrar antes lo vencido y lo de caja baja.
- FR-4: La sesión debe **intercalar** ítems de todos los temas desbloqueados del idioma activo.
- FR-5: El usuario debe poder responder con teclas `1`–`4` / `A`–`D` y la app debe auto-avanzar tras un retardo corto.
- FR-6: El sistema debe mostrar feedback de color inmediato (verde/rojo) al responder.
- FR-7: El sistema debe manejar inglés y japonés con progreso independiente por idioma.
- FR-8: Para japonés, el sistema debe tratar significado, lectura y escritura como tipos de ítem separados con estado independiente.
- FR-9: El sistema debe desbloquear temas al alcanzar umbrales de ítems dominados (nivel).
- FR-10: El dashboard debe mostrar dominio por tema (dominados/total) como métrica principal y % de aciertos como secundaria.
- FR-11: El sistema debe ofrecer un modo "repaso de errores recientes" que use el mismo scheduler.
- FR-12: El sistema debe insertar challenges de producción ocasionales para ítems dominados (configurable).
- FR-13: El sistema debe llevar racha diaria, XP y meta diaria.
- FR-14: El contenido seed debe ser editable/ampliable por fuera del código.

## 5. Non-Goals (Out of Scope)

- **Sin generación de preguntas por IA en v1** (el banco es curado; ampliable después).
- Sin app móvil nativa (solo web responsive).
- Sin reconocimiento de voz ni evaluación de pronunciación por audio.
- Sin escritura libre a mano alzada de kanji.
- Sin migración a FSRS en v1 (se deja como evolución futura del motor Leitner).
- Sin funciones sociales (rankings entre usuarios, amigos, etc.).
- Sin idiomas más allá de inglés y japonés en v1.

## 6. Design Considerations

- Interfaz **en español**, moderna y minimalista, pensada para velocidad: una pregunta a la vez, opciones grandes tocables, atajos de teclado visibles.
- Feedback de color instantáneo y micro-animaciones cortas (no deben demorar el avance).
- Layout responsive: en celular las opciones ocupan ancho completo y se tocan con el pulgar.
- Para japonés: tipografía que soporte kana y kanji correctamente; rōmaji como apoyo visual atenuado.
- El número grande de cada tema es **dominio** (dominados/total), no el %.

## 7. Technical Considerations

- Web responsive (definir stack frontend en implementación).
- Motor de programación: **Leitner** cajas 1–5 con intervalos configurables; diseñado para poder reemplazarse por FSRS más adelante sin rehacer el modelo de datos.
- Estado por usuario e ítem persistido; progreso separado por idioma y por capa (japonés).
- Contenido seed en archivos de datos editables (ej. JSON/CSV) cargables a la base.
- El selector de sesión (interleaving + priorización por vencimiento/caja) es el componente algorítmico central; conviene aislarlo y testearlo aparte.

## 8. Success Metrics

- El usuario puede responder un ítem y pasar al siguiente **sin tocar el mouse**, en menos de ~1.5 s por ítem cuando ya sabe la respuesta.
- Los ítems fallados reaparecen notablemente antes que los acertados (verificable por logs de `due_at`).
- El dominio por tema sube de forma medible a lo largo de las sesiones (ítems pasando a cajas 4–5).
- Retención: los ítems "dominados" mantienen alta tasa de acierto al reaparecer tras intervalos largos.

## 9. Open Questions

- ¿Umbrales exactos de ítems dominados por nivel y cuántos temas trae cada idioma en el seed?
- ¿Frecuencia de los challenges de producción (ej. 1 cada N apariciones de ítems dominados)?
- ¿Intervalos concretos de cada caja Leitner para v1?
- ¿Cuándo se introduce kanji (qué nivel) y con qué set inicial?
- ¿Persistencia local (un solo dispositivo) o cuentas con sincronización desde v1?

## 10. Implementation Log

### 2026-05-30 — US-001: Data model for items and topics
- Created `lib/vocab/types.ts` with TypeScript interfaces: `LanguageCode`, `Language`, `ItemType` (union), `Topic`, `Item`.
- `ItemType` covers `vocab_meaning`, `vocab_reading`, `grammar`, `production`.
- `Item.baseWordId` links Japanese vocabulary layers to a shared base word.
- Commands: `npm run typecheck` → clean (no errors).
- Chrome verification: site loads at http://localhost:3001/intercambia, no console errors.

### 2026-05-30 — SRS-002: Learning state per item (Leitner)
- Created `lib/vocab/leitner.ts` with `UserItemState` interface, `BOX_INTERVALS_MS` config, `MASTERED_BOX_THRESHOLD=4`.
- Pure functions: `applyCorrect`, `applyIncorrect`, `createInitialState`, `isMastered`.
- Correct answer raises box by 1 (max 5); incorrect resets to box 1. Box 4–5 = mastered.
- Commands: `npm run typecheck` → clean.
- Chrome verification: site loads, no console errors.

### 2026-05-30 — SRS-004: Question generation with hard distractors
- Created `lib/vocab/question.ts` with `buildQuestion(item)` → `Question` (item, shuffled options[], correctIndex).
- Uses item's curated distractor list (first 3); options are Fisher-Yates shuffled each call.
- Commands: `npm run typecheck` → clean.
- Chrome verification: site loads, no console errors.

### 2026-05-30 — SRS-003: Interleaved session selector
- Created `lib/vocab/session.ts` with `buildSessionQueue(unlockedTopics, allItems, stateMap, now, maxItems)`.
- Pulls from all unlocked topics (interleaving). Prioritises overdue items (box ASC, dueAt ASC), then new items.
- Prevents two consecutive identical items.
- Commands: `npm run typecheck` → clean.
- Chrome verification: site loads, no console errors.
