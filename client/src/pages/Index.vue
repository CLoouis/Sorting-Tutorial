<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header1.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <h1>SORTING TUTORIAL</h1>
          <h4>Learn How Sorting Algorithms Work</h4>
        </div>
        <h6 class="category category-absolute">
          By Anna Elvira Hartoyo - 13518045
        </h6>
      </div>
    </div>
    <tabs-section></tabs-section>
    <result-section></result-section>
    <div class="space-70"></div>

  </div>
</template>
<script>
import { Parallax } from '@/components';
import BasicElements from './components/BasicElementsSection';
import Navigation from './components/Navigation';
import TabsSection from './components/Tabs';
import ResultSection from './components/Result';


export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    TabsSection,
    ResultSection
  }
};
</script>
<style></style>
