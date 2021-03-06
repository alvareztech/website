---
title: Implementar Bottom Navigation View en Android para la navegación
summary: Implementación de un Bottom Navigation View en una aplicación Android.
tags: [android, material, jetpack, androidx]
video.youTube: aTPwcWQIckw
date: 2016-10-22 08:00
language: es
---

Implementación de un `BottomNavigationView` en una aplicación Android.

> Ahora este componente es parte de _Jetpack_ y este tutorial se actualizó a _AndroidX_. 

## Dependencia

Adición de la dependencia (0.48)

```groovy
~~compile 'com.android.support:design:25.0.0'~~
```

```groovy
implementation 'com.google.android.material:material:1.1.0'
```

## Adicionando el componente

Adicionando el `BottomNavigationView` (1.08)

```
<com.google.android.material.bottomnavigation.BottomNavigationView
    android:id="@+id/bottomNavigationView"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_gravity="bottom"
    app:labelVisibilityMode="labeled"
    app:menu="@menu/menu_navigation" />
```

Video version (deprecated):

```xml
<android.support.design.widget.BottomNavigationView  
    android:id="@+id/bottomNavigationView"
    android:layout_width="match_parent"
    android:layout_height="wrap_content" />
```

## Menú

Creación del menú (1.38)

`menu_navigation.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>  
<menu xmlns:android="http://schemas.android.com/apk/res/android">

    <item
        android:id="@+id/inicioItem"
        android:icon="@drawable/ic_home"
        android:title="@string/inicio" />

    <item
        android:id="@+id/buscarItem"
        android:icon="@drawable/ic_search"
        android:title="@string/buscar" />

    <item
        android:id="@+id/camaraItem"
        android:icon="@drawable/ic_camera_alt"
        android:title="@string/camara" />

    <item
        android:id="@+id/favoritosItem"
        android:icon="@drawable/ic_favorite"
        android:title="@string/favoritos" />

    <item
        android:id="@+id/perfilItem"
        android:icon="@drawable/ic_person"
        android:title="@string/perfil" />

</menu>
```

[master es](https://github.com/alvareztech/BottomNavigationViewSample)

> La versión actualizada se encuentra en el branch _master_ si quieres ver la versión exacta del video puedes ir al branch _video_.

Luego de que descargues o clones el proyecto puedes importarlo con la opción "Import Project" desde *Android Studio*.

---

## Extra

### Badges

Ahora es posible adicionar _badges_ a cada sección.

__Importar BadgeDrawable__

```java
import com.google.android.material.badge.BadgeDrawable;
```
__Colocar un valor o marca por el id del menu__

```java
BadgeDrawable badge = bottomNavigationView.getOrCreateBadge(R.id.inicioItem);
badge.setNumber(7); // opcional si solo quieres poner un punto rojo
badge.setVisible(true);
```

### Themes

Ya no es necesario colocar la sombra manualmente, esta ya esta en el tema por defecto.

__Default__

```xml
style="@style/Widget.MaterialComponents.BottomNavigationView"
```

Si quieres que el `BottomNavigationView` tenga de fondo el color primario de la aplicación.

```xml
style="@style/Widget.MaterialComponents.BottomNavigationView.Colored"
```

Y este es el antiguo estilo con algo de movimiento, pero no recomendado.

```xml
style="@style/Widget.Design.BottomNavigationView"
```

### Quitar animación

Si no deseas la animación de selección puedes adicionar el siguiente attributo.

```xml
app:labelVisibilityMode="labeled"
```

~~Si deseas que no tenga la animación de zoom al cambiar de opción (shift mode) aún no hay un método que lo permita hacer de forma sencilla, pero puedes utilizar este método:~~

```java
private void removeShiftMode(BottomNavigationView bottomNavigationView) {~~
    BottomNavigationMenuView menuView = (BottomNavigationMenuView) bottomNavigationView.getChildAt(0);
    try {
        Field shiftingMode = menuView.getClass().getDeclaredField("mShiftingMode");
        shiftingMode.setAccessible(true);
        shiftingMode.setBoolean(menuView, false);
        shiftingMode.setAccessible(false);
        for (int i = 0; i < menuView.getChildCount(); i++) {
            BottomNavigationItemView item = (BottomNavigationItemView) menuView.getChildAt(i);
            //noinspection RestrictedApi
            item.setShiftingMode(false);
            //noinspection RestrictedApi
            item.setChecked(item.getItemData().isChecked());
        }
    } catch (NoSuchFieldException e) {
    } catch (IllegalAccessException e) {
    }
}
```

~~Puedes descargar el mismo ejemplo con esta modificación:~~

* [Repository](https://github.com/alvareztech/BottomNavigationViewSample/tree/remove-shift)
* [Download](https://github.com/alvareztech/BottomNavigationViewSample/archive/remove-shift.zip)

### Con Fragments

Si quieres el ejemplo con fragments te lo dejamos aquí (aún no actualizada con _AndroidX_):

* [Repository](https://github.com/alvareztech/BottomNavigationViewSample/tree/fragments)
* [Download](https://github.com/alvareztech/BottomNavigationViewSample/archive/fragments.zip)

## Recursos adicionales

* [Class Definition](https://developer.android.com/reference/android/support/design/widget/BottomNavigationView.html) (deprecated)
* [Class Definition](https://developer.android.com/reference/com/google/android/material/bottomnavigation/BottomNavigationView)
* [Design guide](https://material.io/design/components/bottom-navigation.html)
