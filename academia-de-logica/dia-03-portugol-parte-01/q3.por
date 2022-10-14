programa {
	funcao inicio() {
	    
		inteiro nota1, nota2, media
		
		escreva("Insira a nota 1: ")
		leia (nota1)
		
		escreva("Insira a nota 2: ")
		leia (nota2)
		
		media = (nota1 + nota2) / 2
		
		se (media >= 7) {
		    escreva("Aluno aprovado\n")
		} senao {
		    escreva("Aluno reprovado\n")
		}
	}
}
