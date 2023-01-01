import Navigation from '../../components/Navigation';
import Mode from '../../components/Mode';
import './home.css';
import './home-mobile.css';
import Recommandations from '../../components/Recommandations';
import TabComp from '../../components/TabComp';

function Home() {
  return (
    <>
      <div className="main home" id="Accueil">
        <div className="header">
          <div className="header-left">
            <img src="assets/images/logo.jpg" alt="logo" />
          </div>
          <div className="header-right">
            <Navigation />
          </div>
        </div>
        <div className="section-text">
          <p className="subtitle">Controverse</p>
          <h1 className="title">
            Le lait est-il notre (faux)-ami pour la vie ?
          </h1>
          <p className="description">
            La consommation de lait au cours de la vie :<br /> de la vache qui
            rit à la vache qui doute.
          </p>
        </div>
        <div className="section-image">
          <div className="image-left">
            <div className="evaluate">
              <img src="assets/images/plus.png" alt="plus" />
            </div>
            <h3 className="legend">
              Renforce la structure des os
              <span>
                <img src="assets/images/arrow-left.png" alt="arrow" />
              </span>
            </h3>
            <h3 className="legend">
              Contribue au développement de la structure cérébrale
              <span>
                <img src="assets/images/arrow-left.png" alt="arrow" />
              </span>
            </h3>
            <h3 className="legend">
              Prévient les maladies cardiovasculaires
              <span>
                <img src="assets/images/arrow-left.png" alt="arrow" />
              </span>
            </h3>
          </div>
          <div className="image-right">
            <div className="evaluate">
              <img src="assets/images/minus.png" alt="plus" />
            </div>
            <h3 className="legend">
              <span>
                <img src="assets/images/arrow.png" alt="arrow" />
              </span>
              Favorise le développement des cancers{' '}
            </h3>
            <h3 className="legend">
              <span>
                <img src="assets/images/arrow.png" alt="arrow" />
              </span>
              Augmente le risque de surpoids
            </h3>
            <h3 className="legend">
              <span>
                <img src="assets/images/arrow.png" alt="arrow" />
              </span>
              Ne diminue pas le risque de fractures
            </h3>
          </div>
        </div>
        <div className="separate">
          <img src="assets/images/arrow-down.png" alt="arrow-down" />
        </div>
        <div className="section-text jumbo">
          <h1 className="title">Introduction</h1>
          <p className="description-small">
            En 2004, le journaliste Thierry Souccar publie son livre Santé,
            mensonges et propagande dans lequel il analyse et dénonce les
            pratiques des multinationales de l’agroalimentaire dans
            l’orientation des imaginaires et conseils nutritionnels, relayés par
            les institutions gouvernementales.
          </p>
          <p className="description-small">
            {' '}
            Parmi ceux-là, il remet en question l’idée très intégrée que «les
            laitages renforcent la solidité des os». Suite à de nombreuses
            réactions des lecteurs sur ce sujet, il pousse son étude et publie,
            trois ans plus tard, Lait, mensonges et propagande.
          </p>
          <p className="description-small">
            Cet ouvrage, premier à mettre en doute les prétendus bienfaits du
            lait pour la santé, et à mettre en avant le rôle des lobbies dans la
            création de cet imaginaire collectif, constitue, en France, le point
            de départ de la controverse.
          </p>
          <p className="description-small">
            L’ensemble de ces scandales et remises en question, parsemée de
            questionnements autour des différences dans les recommandations par
            les agences étatiques, et leur proximité avec les industries
            laitières, a contribué à la remise en question par de nombreux pans
            de la société du lait, aliment particulièrement présent dans le
            quotidien des français.
          </p>
          <p className="description-small">
            Plusieurs camps scientifiques s’opposent et interrogent sur les
            bienfaits du lait : cancer, ostéoporose, maladies cardiovasculaires…
            Les conséquences du lait sur la santé sont analysées et contestées
            sur de nombreux points.
          </p>
          <p className="description-small">
            Le lait est cependant profondément ancré dans la culture française
            et c’est ce qui fait que la question du lait émeut et intéresse tant
            les français. Ce lien entre culture française et lait date de
            l’après-guerre. Pierre Mendès-France, alors Président du Conseil des
            Ministres fait remplacer le verre d’alcool à l’école par un verre de
            lait sucré. Le lait devient l’arme idéale pour diminuer l’alcoolisme
            observable en France à la suite de la guerre et relancer l’économie
            agricole française.
          </p>
          <p className="description-small">
            Le lait, aliment aussi démocratisé et banalisé dans nos habitudes
            alimentaires, se retrouve alors à la croisée de critiques d’ordre
            sanitaire, environnementale, diététique voire morale. Pourtant à
            toutes ces dénonciations les scientifiques peinent à tomber d’accord
            sur les réelles conséquences du lait sur la santé.
          </p>
          <p className="description-small">
            Dans quelle mesure existe-il une incertitude scientifique autour du
            lait, ce qui en fait un sujet sensible dans l’ensemble de la société
            ? Le flou autour des recommandations officielles par les agences
            nationales, la publicité et les recommandations des médecins, croisé
            à une histoire de la consommation du lait complexe, nous amène à
            douter de la vision largement partagée qui voit dans le lait un ami
            pour la vie.
          </p>
          <p className="description-small">
            Nous avons décidé d’interroger cette controverse en se concentrant
            uniquement sur le lait de vache et les produits transformés à partir
            de ce dernier.
          </p>
        </div>
        <div className="separate" id="Mode">
          <img src="assets/images/arrow-down.png" alt="arrow-down" />
        </div>
        <Mode />
        <div className="separate" id="Consommation">
          <img src="assets/images/arrow-down.png" alt="arrow-down" />
        </div>
        <Recommandations />
        <div className="separate" id="Theme">
          <img src="assets/images/arrow-down.png" alt="arrow-down" />
        </div>
        <TabComp />
      </div>
    </>
  );
}

export default Home;
