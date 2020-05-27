<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >

    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Find Source Code on GitHub"
          data-placement="bottom"
          href="https://github.com/annaelvira24/Sorting-Tutorial"
          target="_blank"
        >
          <i class="fab fa-github"></i>
          <p class="d-lg-none d-xl-none">GitHub</p>
        </a>
      </li>
  
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow me on Instagram :D"
          data-placement="bottom"
          href="https://www.instagram.com/annaelvira24"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
