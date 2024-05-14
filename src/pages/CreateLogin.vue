<template>
  <div class="container">
    <div class="rectangle1"></div>
    <div class="rectangle2"></div>
    <img class="Imagem1" src="path/to/image1.png" alt="Imagem1">
    <div class="ImagemForm"></div>
    <div class="Grupo2">
      <!-- Conteúdo do formulário aqui -->
    </div>
    <div class="CreateAccont">Create Account</div>
    <div class="EmailAddres">Email Address</div>
    <div class="RetanguloEmail"></div>
    <div class="NomeCompleto">Full Name</div>
    <div class="RetanguloNome"></div>
    <div class="Password">Password</div>
    <div class="RetanguloPassword"></div>
    <!-- Ícone para ver senha -->
  </div>
</template>

<script setup>
</script>


<style scoped>

.container {
  position: relative;
  width: 1280px;
  height: 832px;

  background: #FFFFFF;
}

.rectangle1 {
  position: absolute;
  width: 640px;
  height: 832px;
  left: 0px;
  top: 0px;

  background: #03111B;
}

.rectangle2 {
  position: absolute;
  width: 640px;
  height: 832px;
  left: 640px;
  top: 0px;

  background: #FFFFFF;
}

.Imagem1 {
  position: absolute;
  width: 131px;
  height: 148px;
  left: 254px;
  top: 342px;
}

.ImagemForm {
  position: absolute;
  width: 77px;
  height: 99px;
  left: 281px;
  top: 342px;

  background: #007AD3;
}

.Grupo2 {
  position: absolute;
  width: 280px;
  height: 465px;
  left: 820px;
  top: calc(50% - 465px / 2 - 0.5px);
}


.CreateAccont {
  position: absolute;
  width: 165px;
  height: 27px;
  left: 820px;
  top: 183px;

  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;

  color: #1E1E1E;
}


.EmailAddres {
  position: absolute;
  width: 109px;
  height: 19px;
  left: 820px;
  top: 323px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #1E1E1E;
}



.NomeCompleto {
  position: absolute;
  width: 76px;
  height: 19px;
  left: 820px;
  top: 235px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #1E1E1E;
}

.Password {
  position: absolute;
  width: 75px;
  height: 19px;
  left: 820px;
  top: 411px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #1E1E1E;
}

.RetanguloEmail {
  box-sizing: border-box;

  position: absolute;
  width: 280px;
  height: 40px;
  left: 820px;
  top: 346px;

  background: #FFFFFF;
  border: 1px solid #03111B;
  border-radius: 5px;
}

.RetanguloNome {
  box-sizing: border-box;

  position: absolute;
  width: 280px;
  height: 40px;
  left: 820px;
  top: 258px;

  background: #FFFFFF;
  border: 1px solid #03111B;
  border-radius: 5px;
}


.RetanguloPassword {
  box-sizing: border-box;

  position: absolute;
  width: 280px;
  height: 40px;
  left: 820px;
  top: 435px;

  background: #FFFFFF;
  border: 1px solid #03111B;
  border-radius: 5px;
}

/* Incone para ver senha */
</style>