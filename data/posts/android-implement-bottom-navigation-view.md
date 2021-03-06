---
title: Implement Bottom Navigation View for Android
summary: Implementation of a Bottom Navigation View in an Android application.
tags: [android, material, jetpack, androidx]
video.youTube: aTPwcWQIckw
date: 2016-10-22 08:00
---

Implementation of a Bottom Navigation View in an Android application.

> Now this component is part of _Jetpack_ and this tutorial was updated to _AndroidX_. 

## Dependency

Dependency addition (0.48)

```groovy
~~compile 'com.android.support:design:25.0.0'~~
```

```groovy
implementation 'com.google.android.material:material:1.1.0'
```

## Adding  the component

Adding the `BottomNavigationView` (1.08)

```
<com.google.android.material.bottomnavigation.BottomNavigationView
    android:id="@+id/bottomNavigationView"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_gravity="bottom"
    app:labelVisibilityMode="labeled"
    app:menu="@menu/menu_navigation" />
```

Versión del video (deprecated):

```xml
<android.support.design.widget.BottomNavigationView  
    android:id="@+id/bottomNavigationView"
    android:layout_width="match_parent"
    android:layout_height="wrap_content" />
```

## Menu

Menu creation (1.38)

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

[master](https://github.com/alvareztech/BottomNavigationViewSample)

> The updated version is in _master_ branch if you need exactly the video version you can use the _video_ branch.

After you download or clone the project you can import it with the "Import Project" option from Android Studio.

---

## Extra

### Badges

Now it's posible to add _badges_ to each section.

__Import BadgeDrawable__

```java
import com.google.android.material.badge.BadgeDrawable;
```
__Set a value or mark by the id of the menu__

```java
BadgeDrawable badge = bottomNavigationView.getOrCreateBadge(R.id.inicioItem);
badge.setNumber(7); // optional if you just want to put a red dot
badge.setVisible(true);
```

### Themes

It's no longer neccesary to place a shadow manually, it's already in the default theme.

__Default__

```xml
style="@style/Widget.MaterialComponents.BottomNavigationView"
```

If you need a `BottomNavigationView` with the app primary color background.

```xml
style="@style/Widget.MaterialComponents.BottomNavigationView.Colored"
```

And this is the old style with some animation, but not recommended.

```xml
style="@style/Widget.Design.BottomNavigationView"
```

### Remove animation

If you don't want the selection animation you can add the following attribute.

```xml
app:labelVisibilityMode="labeled"
```

~~If you don't want the zoom animation when the option changes (shift mode) there is no a method that allows it yet, but you can use this:~~

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

~~You can download the same example with this change.~~

* [Repository](https://github.com/alvareztech/BottomNavigationViewSample/tree/remove-shift)
* [Download](https://github.com/alvareztech/BottomNavigationViewSample/archive/remove-shift.zip)

## With Fragments

If you want an example with fragments I leave it here (not updated with _AndroidX_ yet):

* [Repository](https://github.com/alvareztech/BottomNavigationViewSample/tree/fragments)
* [Download](https://github.com/alvareztech/BottomNavigationViewSample/archive/fragments.zip)

## Resources

* [Class Definition](https://developer.android.com/reference/android/support/design/widget/BottomNavigationView.html) (deprecated)
* [Class Definition](https://developer.android.com/reference/com/google/android/material/bottomnavigation/BottomNavigationView)
* [Design guide](https://material.io/design/components/bottom-navigation.html)
