let tooltipTriggerList = [].slice.call(
    document.querySelectorAll("[data-bs-toggle='tooltip']")
);

let tooltipList = tooltipTriggerList.map((tooltipTriggerElement) => {
    return new bootstrap.Tooltip(tooltipTriggerElement);
});