function getDevices() {
    $.ajax({
        url: "/api/devices",
        contentType: "application/json",
        dataType: 'json',
        success: function (result) {
            var devices = "";
            $.each(result, function (index, value) {
                devices += `
                <div class="col mb-4">
                    <div class="card ">
                        <div class="card-body">
                            <h5 class="card-title">${value.model}</h5>
                            <p class="card-text">${value.description}</p>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Aktywny: ${value.active}</li>                                               
                            </ul>
                            <div class="card-body">
                                <a href="device/${value._id}" class="btn btn-primary">More</a>
                            </div>
                        </div>
                    </div>
                </div>`
            });
            $(".devices").append(devices);
        }
    })
}

$(document).ready(function () {


});