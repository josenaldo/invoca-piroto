define(
    ["jquery", , "popper", "bootstrap", "datatables.bootstrap" ],
    function ( $, ) {
        $(document).ready(function() {
            $.fn.DataTable.ext.pager.numbers_length = 5;
            $('#nomes').dataTable({
                "paging":   true,
                "ordering": true,
                'searching': true,
                "pageLength": 10,
                "pagingType": "full_numbers",
                "language": {
                    "search": "Busca",
                    "lengthMenu": "Mostrando _MENU_ capirotos por página",
                    "zeroRecords": "Nenhum capiroto sumonado",
                    "info": "Mostrando página _PAGE_ de _PAGES_",
                    "infoEmpty": "Nenhum capiroto no inferno",
                    "infoFiltered": "(filtrado de _MAX_ total de capirotos)",
                    "paginate":{
                        "first": "<<",
                        "previous": "<",
                        "next": ">",
                        "last": ">>",
                    }
                }

            });
        } );
    }
);