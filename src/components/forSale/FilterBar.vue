<template>
  <div class="mt-[90px]">
    <div class="pry-main">
      <div
        class="
          px-[15px]
          mx-auto
          max-w-[1440px]
          py-[15px]
          flex
          sm:justify-between
          justify-center
          gap-[15px]
          sm:gap-0
          h5-med
          !text[24px]
          !text-[#6D553E]
        "
      >
        <div class="sm:block hidden">
          <div class="lg:gap-[32px] gap-[15px] flex items-center">
            <select
              class="
                py-[10px]
                md:px-[16px]
                px-[5px]
                rounded-[5px]
                bg-[#f6f6f6]
                outline-none
                border-none
              "
              name="type"
              id="type"
            >
              <option value="">Type</option>
              <option value="">Type</option>
              <option value="">Type</option>
              <option value="">Type</option>
              <option value="">Type</option>
            </select>
            <select
              class="
                py-[10px]
                md:px-[16px]
                px-[5px]
                rounded-[5px]
                bg-[#f6f6f6]
                outline-none
                border-none
              "
              name="Bed"
              id="bed"
            >
              <option value="">Bed</option>
              <option value="">Bed</option>
              <option value="">Bed</option>
              <option value="">Bed</option>
              <option value="">Bed</option>
            </select>
            <select
              class="
                py-[10px]
                md:px-[16px]
                px-[5px]
                rounded-[5px]
                bg-[#f6f6f6]
                outline-none
                border-none
              "
              name="price_list"
              id="price_list"
            >
              <option value="">Price List</option>
              <option value="">Price List</option>
              <option value="">Price List</option>
              <option value="">Price List</option>
              <option value="">Price List</option>
            </select>
            <button
              class="
                py-[10px]
                md:px-[16px]
                px-[5px]
                rounded-[5px]
                bg-[#f6f6f6]
                outline-none
                border-none
              "
            >
              Search
            </button>
          </div>
        </div>

        <div class="lg:gap-[32px] gap-[15px] flex items-center">
          <button
            class="
              py-[10px]
              md:px-[16px]
              px-[5px]
              rounded-[5px]
              bg-[#f6f6f6]
              outline-none
              border-none
            "
          >
            Dashboard
          </button>
          <button
            class="
              py-[10px]
              md:px-[16px]
              px-[5px]
              rounded-[5px]
              bg-[#f6f6f6]
              outline-none
              border-none
            "
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
    <div class="!text-[#6D553E] pt-[28px] sm:px-[40px] px-[15px] flex md:flex-row flex-col md:gap-[60px] gap-[5px] items-center lg:justify-between justify-center">
      <p class="h3-semi">LIST OF PROPERTIES AVAILABLE FOR SALE</p>
      <div
        class="
          text-[#6D553E]
          max-w-[823px]
          w-full
          rounded-[5px]
          bg-[#E0D4C9]
          md:px-[38px] px-[15px]
          py-[7px]
          flex items-center
          justify-between
        "
      >
        <p class="h4-bold sm:block hidden">Search Results</p>
        <div class="w-full sm:max-w-[434px]">
          <input
            class=" w-full rounded-[20px] py-[10px] px-[16px] outline-none"
            type="text"
            name="search"
            id="search"
            placeholder="Search Result"
          />
        </div>
      </div>
    </div>
  </div>
</template>