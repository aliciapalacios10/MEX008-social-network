const profile = {
    render: async () => {
      return `
      <section id="profile">
      <h3>Perfil</h3>
      <hr>
      <img src="" alt="">
      <p>Hola soy Ramona Díaz, actualmente  soy estudiante de Diseño en UAM Azcapotzalco
      me considero una persona alegre, decidida y que en su tiempo libre, ama rodar
      por la ciudad de México</p>
      <br>
      <p><i class="material-icons tiny">person</i> Ramona Díaz</p>
      <p><i class="material-icons tiny">email</i> ramona@gmail.com</p>
      <p><i class="material-icons tiny"></i> 24 años </p>
      <p><i class="material-icons tiny">phone_iphone</i> 01 55 6724 5350</p>
      <p><i class="material-icons tiny">location_on</i> Ciudad de México</p>
    </section>
          `;
    },
    after_render: () => {}
  };
  export default profile;
  