<template>
  <div class="wrapper">
    <div class="search-filter">
      <button class="filter">
        <p>Type</p>
        <img
          src="../../assets/forSale/D-Arrow-Icon.png"
          alt=""
          class="arrow-icon"
        />
      </button>
      <button class="filter">
        <p>Bed</p>
        <img
          src="../../assets/forSale/D-Arrow-Icon.png"
          alt=""
          class="arrow-icon"
        />
      </button>
      <button class="filter price">
        <p>Price List</p>
        <img
          src="../../assets/forSale/D-Arrow-Icon.png"
          alt=""
          class="arrow-icon"
        />
      </button>
      <button class="filter">Search</button>
    </div>
    <div class="dashboard-refresh">
      <button class="filter">Dashboard</button>
      <button class="filter">Refresh</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  background-color: #6d553e;
  margin-top:95px;
}
.search-filter {
  display: flex;
}
.filter {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--barley-40);
  padding: 5px 7px;
  border-radius: 3px;
  border: none;
}
.filter p {
  padding: 0 4px;
}
.arrow-icon {
  width: 10px;
  height: 5px;
}

@media (min-width: 280px) {
  .wrapper {
    padding: 10px;
  }
  .filter {
    font-size: 0.6rem;
    margin: 2px;
  }
  .dashboard-refresh {
    display: none;
  }
}
@media (min-width: 768px) {
  .dashboard-refresh {
    display: flex;
  }
  .filter {
    font-size: 0.6rem;
    margin: 0 12px;
  }
}
@media (min-width: 786px) {
  .wrapper {
    flex-direction: row;
    padding: 20px 100px;
  }
  .filter {
    font-size: 1rem;
    margin: 0 13px;
  }
  .dashboard-refresh {
    margin-right: -100px;
  }
}
</style>
