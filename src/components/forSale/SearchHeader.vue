<template>
  <div class="header-wrapper">
    <h2>List of Properties Available for sale</h2>
    <div class="searchbar-wrapper">
      <p>Search Results</p>
      <div class="searchbar">
        <input type="text" placeholder="Search" />
        <button>
          <img
            src="../../assets/forSale/Search-Icon.png"
            alt=""
            class="search-icon"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-wrapper {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--barley-40);
}
.header-wrapper h2 {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.searchbar-wrapper {
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e0d4c9;
  padding: 5px 20px;
  margin-left: 30px;
  border-radius: 3px;
}
.searchbar-wrapper p {
  font-weight: bold;
}
input {
  background: none;
  border: none;
  flex: 1;
  outline: none;
  padding: 2px;
}
::placeholder {
  font-weight: bold;
  color: var(--barley-40);
}
.searchbar {
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 70%;
  padding: 5px 15px;
  border-radius: 20px;
}
.searchbar button {
  background: none;
  border: none;
}
.search-icon {
  width: 20px;
  height: 20px;
}

@media (min-width: 280px) {
  .header-wrapper {
    flex-direction: column;
  }
  .header-wrapper h2 {
    font-size: 0.8rem;
    letter-spacing: 0;
  }
  .searchbar-wrapper {
    width: 100%;
    margin: 0;
    padding: 5px;
    flex-direction: column;
  }
  .searchbar-wrapper p {
    font-size: 0.7rem;
  }
  .searchbar {
    width: 100%;
  }
  input {
    flex: 0;
  }
}
@media (min-width: 600px) {
  .searchbar-wrapper {
    width: 70%;
  }
}

@media (min-width: 786px) {
  .header-wrapper {
    flex-direction: row;
  }
  .header-wrapper h2 {
    font-size: 1rem;
  }
  .searchbar-wrapper {
    width: 55%;
    margin: 0;
    padding: 5px 20px;
    flex-direction: row;
  }
  .searchbar-wrapper p {
    font-size: 0.7rem;
  }
  .searchbar {
    width: 70%;
  }
  input {
    flex: 0;
  }
}
@media (min-width: 1024px) {
  .header-wrapper h2 {
    font-size: 1.2rem;
  }
  .searchbar-wrapper p {
    font-size: 1rem;
  }
}
</style>
