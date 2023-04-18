let cardGenerator = (el) => {
  return `<a href='../../src/pages/details.html?id=${el._id}'
        class="h-[300px] rounded-2xl flex flex-col justify-between text-white bg-cover bg-center"
        style="background-image: url(${el.image})"
      >
        <p
          class="bg-[#D90368] w-fit px-4 py-1 rounded-xl relative left-[150px] bottom-[15px]"
        >
          ${el.category}
        </p>
        <div class="flex flex-col px-4 bg-[#D90368] w-fit py-1 mx-2">
          <p class="">${el.name}</p>
          <p class="text-sm">${parseDate(el.date)}</p>
        </div>
      </a>`;
};

let detailTemplate = (el) => {
  return `<div class="w-full sm:w-[80vw] lg:w-[70vw] flex flex-col gap-4">
  <img src="${el.image}" alt="imagen ilustrativa de evento" class="h-[200px] sm:h-[400px] w-full object-cover" id='image'>
  <div class="flex flex-col gap-2 text-white mx-4 sm:mx-0">
      <div class="flex flex-row justify-between">
          <p class="bg-[#D90368] text-white py-1 px-4 flex flex-row justify-center w-fit rounded-xl">${el.category}</p>
          <button class="bg-green-600 py-1 px-4 flex flex-row items-baseline w-fit rounded-sm text-white gap-2"><i class="fa-solid fa-plus"></i>Add to cart</button>
      </div>
      <div class="flex flex-row gap-4 items-center">
        <h2 class="text-2xl">${el.name}</h2>
        <p class="text-[#D90368] text-xl">$${el.price} USD</p>
      </div>
      <div class="flex flex-row gap-6">
        <p><i class="fa-solid fa-location-dot"></i> ${el.place}</p>
        <p><i class="fa-regular fa-calendar"></i> ${parseDate(el.date)}</p>
      </div>
      <p>${el.description}</p>
  </div
</div>`
}

let categoryTemplate = (category) => {
  return `<label>${category}
    <input type="checkbox" id=${category} value=${category} />
  </label>`;
};
