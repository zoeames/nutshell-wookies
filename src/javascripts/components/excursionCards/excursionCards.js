const buildExcursionCards = (excursionCardInfo) => {
  let domString = '';
  domString += `<div class="card excursionCard text-center mb-5 p-3" id="${excursionCardInfo.id}">`;
  domString += `<h3 class="card-title">${excursionCardInfo.excursionName}</h3>`;
  domString += '<div class="row justify-content-around">';
  domString += '<button type="button" id="editExcursion" class="editExcursion col-5 btn-default btn-lg excursionCrudButtonColor glowing"><i class="fas fa-feather-alt"></i> Edit Excursion</button>';
  domString += '<button type="button" id="add-crew-member" class="col-5 btn-default btn-lg excursionCrudButtonColor glowing"><i class="fas fa-plus"></i> Crew Member</button>';
  domString += '<button type="button" id="add-envir-reading-modal" class="col-5 btn-default btn-lg excursionCrudButtonColor glowing"><i class="fas fa-chart-area"></i> Environment Reading</button>';
  domString += '<button type="button" class="add-species-modal col-5 btn-default btn-lg excursionCrudButtonColor glowing"><i class="fas fa-fish"></i> Species Seen </button>';
  domString += '<button type="button" class="single-view-excursion-btn col-11 btn-default btn-lg excursionRowCrudButtonColor glowing"><i class="fas fa-feather-alt"></i> View Excursion </button>';
  domString += '<button type="button" class="deleteExcursion col-11 btn-default btn-lg excursionRowCrudButtonColor glowing"><i class="fas fa-skull-crossbones"></i> Delete Excursion</button>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildExcursionCards };
