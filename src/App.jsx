function App() {
  const servicios = [
    {
      titulo: "Reclutamiento y selección",
      icono: "👥",
      items: [
        "Publicación de vacantes",
        "Filtro de currículums",
        "Entrevistas y pruebas",
        "Verificación de referencias",
        "Presentación de candidatos finalistas",
      ],
    },
    {
      titulo: "Gestión de recursos humanos",
      icono: "📁",
      items: [
        "Expedientes de colaboradores",
        "Contratos laborales",
        "Inducción y onboarding",
        "Control de vacaciones, permisos e incapacidades",
        "Evaluaciones de desempeño",
      ],
    },
    {
      titulo: "Legislación laboral en Costa Rica",
      icono: "⚖️",
      items: [
        "Asesoría sobre Código de Trabajo",
        "Cumplimiento de jornadas, horas extra y descansos",
        "Manejo de despidos, liquidaciones y amonestaciones",
        "Prevención de riesgos legales laborales",
        "Actualización ante cambios normativos",
      ],
    },
    {
      titulo: "Planilla y nómina",
      icono: "💰",
      items: [
        "Cálculo de salarios ordinarios y extraordinarios",
        "Deducciones de ley",
        "Aguinaldo, vacaciones y liquidaciones",
        "Reportes mensuales y comprobantes de pago",
        "Administración de incidencias de planilla",
      ],
    },
    {
      titulo: "Reportes ante CCSS e INS",
      icono: "🏢",
      items: [
        "Inscripción patronal y de trabajadores",
        "Reporte de planillas ante la CCSS",
        "Gestión de pólizas de riesgos del trabajo ante el INS",
        "Declaraciones, ajustes y conciliaciones",
        "Seguimiento de obligaciones patronales",
      ],
    },
    {
      titulo: "Beneficios del outsourcing",
      icono: "🚀",
      items: [
        "Ahorro de tiempo administrativo",
        "Reducción de errores en planilla",
        "Mayor cumplimiento legal",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-black text-blue-900">
            Next <span className="text-blue-600">Laboral CR</span>
          </h1>

          <div className="hidden md:flex gap-8 font-semibold text-slate-700">
            <a className="hover:text-blue-700" href="#inicio">Inicio</a>
            <a className="hover:text-blue-700" href="#servicios">Servicios</a>
            <a className="hover:text-blue-700" href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white"
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_white,_transparent_35%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-block bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Plataforma de Recursos Humanos
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Conectamos talento con oportunidades
            </h2>

            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Reclutamiento, selección, capacitación y asesoría laboral para empresas.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="border border-white/40 text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition"
              >
                Contactar
              </a>
            </div>
          </div>

          {/* LOGO / SIGLAS */}
<div className="bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl flex items-center justify-center">
  <div className="bg-white rounded-3xl p-8 w-full flex items-center justify-center">
    <img
  src="/logo.png"
  alt="Logo Next Laboral CR"
  className="w-full max-w-md object-contain"
/>
  </div>
</div>

</div>
</section>
      {/* SERVICIOS */}
      <section id="servicios" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-blue-700 font-bold text-center mb-3">
            Servicios especializados
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
            Soluciones completas de Recursos Humanos
          </h2>

          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-14 text-lg">
            Brindamos apoyo integral en reclutamiento, administración de personal,
            legislación laboral, planilla, nómina y obligaciones patronales en Costa Rica.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mb-5">
                  {servicio.icono}
                </div>

                <h3 className="text-2xl font-black mb-5 text-blue-950">
                  {servicio.titulo}
                </h3>

                <ul className="space-y-3 text-slate-600">
                  {servicio.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-700 font-black">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-blue-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-blue-300 font-bold mb-3">
            Hablemos
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Contáctanos
          </h2>

          <p className="text-blue-100 mb-10">
            Escríbenos para más información sobre reclutamiento, gestión de recursos humanos,
            planilla, nómina o asesoría laboral.
          </p>

          <form
  action="https://formsubmit.co/nextlaboralcr@nextlaboralcr.com"
  method="POST"
  className="grid gap-5 bg-white p-8 rounded-3xl shadow-2xl"
>
            <input
  type="text"
  name="nombre"
  placeholder="Nombre completo"
  className="p-4 rounded-xl bg-slate-100 text-slate-900 outline-none focus:ring-2 focus:ring-blue-600"
/>

<input
  type="email"
  name="correo"
  placeholder="Correo electrónico"
  className="p-4 rounded-xl bg-slate-100 text-slate-900 outline-none focus:ring-2 focus:ring-blue-600"
/>

<textarea
  name="mensaje"
  placeholder="Mensaje"
  rows="5"
  className="p-4 rounded-xl bg-slate-100 text-slate-900 outline-none focus:ring-2 focus:ring-blue-600"
></textarea>

            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-4 rounded-xl font-black hover:bg-blue-700 transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-center md:text-left">
          <p className="font-bold">
            Next Laboral CR
          </p>

          <p className="text-slate-400">
            © 2026 Next Laboral CR - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App