import React from "react";
import ReactDOM from "react-dom";
import '../../assets/css/Step1.css';

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <button className="modal-close-button rules-button" onClick={hide}>
                    <span>&times;</span>
                  </button>
                </div>
                <div id='content'>
                  <h3 id="content-title">Conditions Général d’Utilisation</h3>
                  <p className="content-justify">
                    Les présentes « conditions générales d'utilisation » ont pour objet l'encadrement juridique de l’utilisation du site [votre site] et de ses services.
                    <br></br><br></br>
                    Ce contrat est conclu entre :
                    <br></br>
                    Le gérant du site internet, ci-après désigné « l’Éditeur », toute personne physique ou morale souhaitant accéder au site et à ses services, ci-après appelé « l’Utilisateur ».
                    <br></br>
                    Les conditions générales d'utilisation doivent être acceptées par tout Utilisateur, et son accès au site vaut acceptation de ces conditions. En entrant sur ce site vous certifiez avoir 18 ans ou plus. L'utilisation de ce site n'est réservé qu'au personne responsable et majoritaire. Le site est régie par une modération qui se réserve le droit de contrôler les identités des profils qu’elle juge non conforme à l’utilisation. Tout utilisateur ayant accès à internet peut accéder gratuitement et depuis n’importe où au site. Les frais supportés par l’Utilisateur pour y accéder (connexion internet, matériel informatique, etc.) ne sont pas à la charge de l’Éditeur. Le site et ses différents services peuvent être interrompus ou suspendus par l’Éditeur, notamment à l’occasion d’une maintenance, sans obligation de préavis ou de justification. L'Utilisateur est responsable des risques liés à l’utilisation de son identifiant de connexion et de son mot de passe. Le mot de passe de l’Utilisateur doit rester secret. En cas de divulgation de mot de passe, l’Éditeur décline toute responsabilité. L'utilisateur assume l’entière responsabilité de l’utilisation qu’il fait des informations et contenus présents sur le site Énigme Hub. Tout usage du service par l'utilisateur ayant directement ou indirectement pour conséquence des dommages doit faire l'objet d'une indemnisation au profit du site. Le membre s’engage à tenir des propos respectueux des autres et de la loi et accepte que ces publications soient modérées ou refusées par l’Éditeur, sans obligation de justification. En publiant sur le site, l’Utilisateur cède à la société éditrice le droit non exclusif et gratuit de représenter, reproduire, adapter, modifier, diffuser et distribuer sa publication, directement ou par un tiers autorisé. L’Éditeur s'engage toutefois à citer le membre en cas d’utilisation de  sa publication. Tout dysfonctionnement du serveur ou du réseau ne peut engager la responsabilité de l’Éditeur. De même, la responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers. Le site Énigme Hub s'engage à mettre en œuvre tous les moyens nécessaires pour garantir la sécurité et la confidentialité des données. 
                    
                    <a href='./notawebsite' id="end-phase-1">Cliquez ici pour continuer</a>. Toutefois, il n’apporte pas une garantie de sécurité totale. L’Éditeur se réserve la faculté d’une non-garantie de la fiabilité des sources, bien que les informations diffusées sur le site soient réputées fiables. Les contenus du site [votre site] (logos, textes, éléments graphiques, vidéos, etc.) sont protégés par le droit d’auteur, en vertu du Code de la propriété intellectuelle. L'utilisateur devra obtenir l’autorisation de l’éditeur du site avant toute reproduction, copie ou publication de ces différents contenus. Ces derniers peuvent être utilisés par les utilisateurs à des fins privées ; tout usage commercial est interdit. Si t’as lu jusqu’ici tu doit nous mettre vingt sur vingt. L'utilisateur est entièrement responsable de tout contenu qu’il met en ligne et il s’engage à ne pas porter atteinte à un tiers. L’Éditeur du site se réserve le droit de modérer ou de supprimer librement et à tout moment les contenus mis en ligne par les utilisateurs, et ce sans justification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;