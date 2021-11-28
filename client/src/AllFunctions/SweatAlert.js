import Swal from "sweetalert2"

export const handleAlert = (aTitle, aText, aConfirmText, doneMessage) => {
    Swal.fire({
        title: aTitle,
        text: aText,
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: aConfirmText,
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Done!',
                doneMessage,
                'success'
            )
        }
    })
}