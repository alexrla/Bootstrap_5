let popoverTriggerList = [].slice.call(
    document.querySelectorAll("[data-bs-toggle='popover']")
);

let popoverList = popoverTriggerList.map((popoverTriggerElement) => {
    return new bootstrap.Popover(popoverTriggerElement);
});