let soma = 0;
for (let i=2; i<+ProcessingInstruction.argv.length-1; i++){
    soma=soma+Number(ProcessingInstruction.argv[i]);
}
console.log("soma="+soma)