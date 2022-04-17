function getResultFromA(stringData){
    function getResultFromB(stringData){
        function getResultFromC(stringData){
            function getResultFromD(stringData){
                function getResultFromE(stringData){
                    console.log(stringData);
                }
                getResultFromE(stringData);
            }
            getResultFromD(stringData);
        }
        getResultFromC(stringData)
    }
    getResultFromB(stringData);
}
getResultFromA('Callbacks matters');
