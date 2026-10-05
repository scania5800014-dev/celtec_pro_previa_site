import { useState } from 'react';
import { Smartphone, Wrench, Clock, ShieldCheck, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from '../data/content';

export function InteractiveBudgetSimulator() {
  const [deviceModel, setDeviceModel] = useState('iPhone 14 / 14 Pro');
  const [issue, setIssue] = useState('Troca de Tela (Display Quebrado / Linhas)');
  const [needBackupHelp, setNeedBackupHelp] = useState(false);

  const deviceModels = [
    'iPhone 16 / 16 Pro / 16 Pro Max',
    'iPhone 15 / 15 Plus / 15 Pro / Pro Max',
    'iPhone 14 / 14 Plus / 14 Pro / Pro Max',
    'iPhone 13 / 13 Mini / 13 Pro / Pro Max',
    'iPhone 12 / 12 Mini / 12 Pro / Pro Max',
    'iPhone 11 / 11 Pro / 11 Pro Max',
    'iPhone XR / XS / XS Max / X',
    'iPad Pro (11" ou 12.9")',
    'iPad Air (M1, M2, 4ª ou 5ª Ger.)',
    'iPad Mini ou iPad Padrão',
    'Outro modelo Apple'
  ];

  const issuesList = [
    { name: 'Troca de Tela (Display Quebrado / Linhas)', estTime: '40 a 50 min', warranty: 'Até 1 Ano', feat: 'Mantém TrueTone & FaceID' },
    { name: 'Troca de Bateria (Saúde abaixo de 80%)', estTime: '30 a 40 min', warranty: 'Garantia Certificada', feat: 'Ciclo 0 / Saúde 100%' },
    { name: 'Conector de Carga (Não carrega / mau contato)', estTime: '45 min', warranty: '90 dias', feat: 'Limpeza & Peça Homologada' },
    { name: 'Reparo em Placa Lógica (Aparelho não liga / travado)', estTime: '24 a 48h (Laboratório)', warranty: 'Laudo Detalhado', feat: 'Microssoldagem SMD' },
    { name: 'Câmera Traseira / Lente Quebrada', estTime: '45 min', warranty: '90 dias', feat: 'Foco automático preservado' },
    { name: 'Contato com Água / Líquidos (Desoxidação)', estTime: '2 a 4h', warranty: 'Banho Ultrassônico', feat: 'Secagem e inspeção de curtos' },
    { name: 'Compra / Troca por iPhone Novo ou Seminovo', estTime: 'Imediato na Loja', warranty: 'Procedência Oficial', feat: 'Avaliação do seu usado' },
  ];

  const currentIssueData = issuesList.find((i) => i.name === issue) || issuesList[0];

  const getWhatsAppMessage = () => {
    let msg = `Olá Celtec.pro! Vim pelo site e gostaria de um orçamento:%0A%0A`;
    msg += `📱 *Aparelho:* ${deviceModel}%0A`;
    msg += `🔧 *Problema/Serviço:* ${issue}%0A`;
    if (needBackupHelp) {
      msg += `💾 *Preciso de ajuda com backup/iCloud:* Sim%0A`;
    }
    msg += `%0APoderiam me informar valores e horários disponíveis para hoje no Centro de Santa Maria?`;
    return `https://wa.me/5555991708201?text=${msg}`;
  };

  return (
    <section id="simulador" className="py-20 bg-white" aria-label="Simulador de Orçamento Apple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#2f8e6c] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Diagnóstico Rápido Online</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2C42] tracking-tight font-display">
            Simulador de Orçamento & Agendamento
          </h2>
          <div className="w-16 h-1 bg-[#3EB489] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Selecione seu modelo e a necessidade do seu aparelho para verificar a estimativa de tempo e enviar direto para nossa equipe técnica em Santa Maria.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200/80 rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form Side */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="device-select" className="block text-sm font-bold text-[#1A2C42] mb-2 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#3EB489]" />
                    <span>1. Selecione o modelo do seu Apple</span>
                  </label>
                  <select
                    id="device-select"
                    value={deviceModel}
                    onChange={(e) => setDeviceModel(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#3EB489] shadow-sm"
                  >
                    {deviceModels.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="issue-select" className="block text-sm font-bold text-[#1A2C42] mb-2 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#3EB489]" />
                    <span>2. O que seu aparelho precisa?</span>
                  </label>
                  <select
                    id="issue-select"
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#3EB489] shadow-sm"
                  >
                    {issuesList.map((i) => (
                      <option key={i.name} value={i.name}>
                        {i.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-2">
                  <label className="flex items-center gap-3 cursor-pointer select-none bg-white p-3 rounded-xl border border-slate-200">
                    <input
                      type="checkbox"
                      checked={needBackupHelp}
                      onChange={(e) => setNeedBackupHelp(e.target.checked)}
                      className="w-5 h-5 rounded border-slate-300 text-[#3EB489] focus:ring-[#3EB489] accent-[#3EB489]"
                    />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      Preciso de suporte com backup de fotos e dados iCloud
                    </span>
                  </label>
                </div>
              </div>

              {/* Estimate Summary Box */}
              <div className="bg-[#1A2C42] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-inner">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                      Resumo da Estimativa
                    </span>
                    <span className="text-xs bg-[#3EB489]/20 text-[#3EB489] px-2.5 py-0.5 rounded-full font-semibold">
                      Santa Maria - RS
                    </span>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div>
                      <span className="text-xs text-slate-400">Modelo Selecionado:</span>
                      <p className="text-base font-bold text-white mt-0.5">{deviceModel}</p>
                    </div>

                    <div>
                      <span className="text-xs text-slate-400">Serviço Solicitado:</span>
                      <p className="text-sm font-medium text-emerald-300 mt-0.5">{issue}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#3EB489]" />
                          Tempo Médio
                        </span>
                        <p className="text-sm font-bold text-white mt-1">{currentIssueData.estTime}</p>
                      </div>

                      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#3EB489]" />
                          Garantia
                        </span>
                        <p className="text-sm font-bold text-white mt-1">{currentIssueData.warranty}</p>
                      </div>
                    </div>

                    <div className="text-xs text-slate-300 flex items-center gap-2 pt-1">
                      <CheckCircle className="w-4 h-4 text-[#3EB489] shrink-0" />
                      <span>{currentIssueData.feat} • Procedência Distribuidora Oficial</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={getWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#3EB489] hover:bg-[#349e77] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-transform hover:scale-102 focus:outline-none focus:ring-4 focus:ring-[#3EB489]/40"
                    aria-label="Confirmar e enviar orçamento no WhatsApp"
                  >
                    <span>Receber Valores no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Resposta média em menos de 10 minutos em horário comercial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
