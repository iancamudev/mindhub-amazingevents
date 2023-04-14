let cardGenerator = (el) => {
  return `<div
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
      </div>`;
};

let categoryTemplate = (category) => {
  return `<label>${category}
    <input type="checkbox" id=${category} value=${category} />
  </label>`;
};
